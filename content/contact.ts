import { WHATSAPP_AGENT_URL } from "@/content/site";

export const contactContent = {
  hero: {
    title: "Let's Start Your Real Estate Journey",
    subtitle: "Whether you're buying, selling, or just exploring options, we're here to help. Reach out anytime — we typically respond within 2 hours.",
    ctaLabel: "Chat on WhatsApp",
    ctaHref: WHATSAPP_AGENT_URL
  },
  
  form: {
    heading: "Send Us a Message",
    subheading: "Fill out the form below and we'll get back to you as soon as possible.",
    fields: {
      firstName: { label: "First Name", placeholder: "John" },
      lastName: { label: "Last Name", placeholder: "Smith" },
      email: { label: "Email", placeholder: "john@example.com" },
      phone: { label: "Phone", placeholder: "(555) 123-4567" },
      interest: {
        label: "I'm interested in",
        options: [
          "Buying a home",
          "Selling a home",
          "Property management",
          "Investment properties",
          "Commercial real estate",
          "General inquiry"
        ]
      },
      budget: {
        label: "Budget Range (if buying)",
        options: [
          "Under $500K",
          "$500K - $1M",
          "$1M - $2M",
          "$2M - $5M",
          "$5M+",
          "Not applicable"
        ]
      },
      message: {
        label: "Tell us more about your goals",
        placeholder: "I'm looking for a 3-bedroom home in Beverly Hills with a pool..."
      }
    },
    submitLabel: "Send Message",
    successMessage: "Thanks for reaching out! We'll be in touch within 2 hours.",
    privacyNote: "We respect your privacy. Your information will never be shared with third parties."
  },
  
  office: {
    heading: "Visit Our Office",
    address: {
      street: "123 Luxury Lane",
      city: "Beverly Hills",
      state: "CA",
      zip: "90210",
      country: "USA"
    },
    phone: "+1 (555) 123-4567",
    email: "hello@grharealestate.com",
    hours: {
      heading: "Office Hours",
      schedule: [
        { day: "Monday - Friday", time: "9:00 AM - 6:00 PM" },
        { day: "Saturday", time: "10:00 AM - 4:00 PM" },
        { day: "Sunday", time: "By appointment only" }
      ]
    },
    note: "Evening and weekend appointments available upon request. We know your schedule is busy — we'll work around it."
  },
  
  map: {
    heading: "Find Us",
    embedUrl: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3306.0!2d-118.4000!3d34.0667!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzTCsDA0JzAwLjAiTiAxMTgKMzYnMDAuMCJX!5e0!3m2!1sen!2sus!4v1234567890",
    buttonText: "Get Directions"
  },
  
  quickContact: {
    heading: "Prefer to Talk Now?",
    options: [
      {
        method: "WhatsApp",
        value: "Chat instantly",
        href: WHATSAPP_AGENT_URL,
        icon: "💬",
        available: "24/7"
      },
      {
        method: "Phone",
        value: "+1 (555) 123-4567",
        href: "tel:+15551234567",
        icon: "📞",
        available: "Mon-Sat"
      },
      {
        method: "Email",
        value: "hello@grharealestate.com",
        href: "mailto:hello@grharealestate.com",
        icon: "✉️",
        available: "Response in 2 hrs"
      }
    ]
  },
  
  faqTeaser: {
    heading: "Common Questions",
    questions: [
      { q: "Do I need to be pre-approved before viewing homes?", a: "It's not required, but we strongly recommend it. Pre-approval strengthens your offer and helps us focus on properties in your budget." },
      { q: "How do I schedule a property tour?", a: "Call, text, or WhatsApp us with the address. We can often arrange same-day or next-day showings." },
      { q: "What areas do you serve?", a: "Primarily Los Angeles and Orange Counties, with select coverage in San Diego and Santa Barbara for investment clients." }
    ],
    fullFaqLink: {
      text: "View all FAQs",
      href: "/services#faqs"
    }
  }
};
