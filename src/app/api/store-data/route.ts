import { google } from "googleapis";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const { fullName, email, companyName, website, mobileNumber } =
      await req.json();

    // Load Google API Credentials
    // const auth = new google.auth.GoogleAuth({
    //   keyFile: path.join(process.cwd(), "src/utils/service-account.json"),
    //   scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    // });

    const auth = new google.auth.GoogleAuth({
      credentials: {
        client_email: process.env.GOOGLE_CLIENT_EMAIL,
        private_key: process.env.GOOGLE_PRIVATE_KEY?.replace(/\\n/g, "\n"),
      },
      scopes: ["https://www.googleapis.com/auth/spreadsheets"],
    });

    const client = await auth.getClient(); // No need for OAuth2Client
    const sheets = google.sheets({ version: "v4", auth: client as any });

    // Your Google Spreadsheet Details
    const SPREADSHEET_ID = process.env.SHEETS_ID; // Replace with actual ID
    const SHEET_NAME = "Sheet1"; // Change if your sheet has a different name

    // Append Data to Google Sheet
    await sheets.spreadsheets.values.append({
      spreadsheetId: SPREADSHEET_ID,
      range: `${SHEET_NAME}!A:E`, // Defines the columns
      valueInputOption: "RAW",
      insertDataOption: "INSERT_ROWS",
      requestBody: {
        values: [[fullName, email, companyName, website, mobileNumber]],
      },
    });

    return NextResponse.json(
      { message: "Data added successfully!" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Google Sheets API Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 }
    );
  }
}
