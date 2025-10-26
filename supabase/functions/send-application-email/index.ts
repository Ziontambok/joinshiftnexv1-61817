import { serve } from "https://deno.land/std@0.190.0/http/server.ts";
import { Resend } from "npm:resend@2.0.0";

const resend = new Resend(Deno.env.get("RESEND_API_KEY"));

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
    const applicantEmail = await resend.emails.send({
      from: "Prime Virtual Solutions <onboarding@resend.dev>",
      to: [email],
      subject: "Application Received - Prime Virtual Solutions",
      html: `
        <h1>Thank you for applying, ${name}!</h1>
        <p>We have received your application for the <strong>${position}</strong> position.</p>
        <p>Our team will review your application and get back to you within 3-5 business days.</p>
        <p>Best regards,<br>Prime Virtual Solutions Team</p>
      `,
    });

    console.log("Applicant confirmation email sent:", applicantEmail);

    // Send notification email to company
    const companyEmail = await resend.emails.send({
      from: "Prime Virtual Solutions <onboarding@resend.dev>",
      to: ["pizonzachary560@gmail.com"],
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
    });

    console.log("Company notification email sent:", companyEmail);

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
