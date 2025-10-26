import { serve } from "https://deno.land/std@0.190.0/http/server.ts";

const RESEND_API_KEY = Deno.env.get("RESEND_API_KEY");

const corsHeaders = {
  "Access-Control-Allow-Origin": "*",
  "Access-Control-Allow-Headers":
    "authorization, x-client-info, apikey, content-type",
};

interface ApplicationEmailRequest {
  name: string;
  email: string;
  phone: string;
  position: string;
  experience: string;
  coverLetter: string;
}

const handler = async (req: Request): Promise<Response> => {
  // Handle CORS preflight requests
  if (req.method === "OPTIONS") {
    return new Response(null, { headers: corsHeaders });
  }

  try {
    const { name, email, phone, position, experience, coverLetter }: ApplicationEmailRequest = await req.json();

    console.log("Sending application email for:", name);

    // Send confirmation email to applicant
    const applicantEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Prime Virtual Solutions <onboarding@resend.dev>",
        to: [email],
        subject: "Application Received - Prime Virtual Solutions",
        html: `
          <h1>Thank you for applying, ${name}!</h1>
          <p>We have received your application for the <strong>${position}</strong> position.</p>
          <p>Our team will review your application and get back to you within 3-5 business days.</p>
          <p>Best regards,<br>Prime Virtual Solutions Team</p>
        `,
      }),
    });

    const applicantEmailResult = await applicantEmailResponse.json();
    
    if (!applicantEmailResponse.ok) {
      console.error("Error sending applicant email:", applicantEmailResult);
      throw new Error(`Failed to send confirmation email: ${applicantEmailResult.message || 'Unknown error'}`);
    }

    console.log("Applicant confirmation email sent:", applicantEmailResult);

    // Send notification email to company
    const companyEmailResponse = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "Prime Virtual Solutions <onboarding@resend.dev>",
        to: ["info@primevsolutions.com"],
        subject: `New Application: ${position} - ${name}`,
        html: `
          <h2>New Job Application Received</h2>
          <h3>Applicant Information</h3>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Position:</strong> ${position}</p>
          
          <h3>Experience</h3>
          <p>${experience}</p>
          
          <h3>Cover Letter</h3>
          <p>${coverLetter}</p>
        `,
      }),
    });

    const companyEmailResult = await companyEmailResponse.json();
    
    if (!companyEmailResponse.ok) {
      console.error("Error sending company email:", companyEmailResult);
      throw new Error(`Failed to send notification email: ${companyEmailResult.message || 'Unknown error'}`);
    }

    console.log("Company notification email sent:", companyEmailResult);

    return new Response(
      JSON.stringify({ success: true, message: "Application submitted successfully" }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
          ...corsHeaders,
        },
      }
    );
  } catch (error: any) {
    console.error("Error in send-application-email function:", error);
    return new Response(
      JSON.stringify({ error: error.message }),
      {
        status: 500,
        headers: { "Content-Type": "application/json", ...corsHeaders },
      }
    );
  }
};

serve(handler);
