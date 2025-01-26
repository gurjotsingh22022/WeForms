# WeForms

![WeForms Banner](https://raw.githubusercontent.com/gurjotsingh22022/WeForms/refs/heads/main/demo/banner.png)

**WeForms** is a powerful **Back-as-a-Service (BaaS)** solution that simplifies HTML form handling. With WeForms, you can receive HTML form submissions directly in your email inbox without the need for servers or backend code. It's fast, reliable, and free to get started!

---

## 🚀 Features

- **No Backend Code Needed**: Say goodbye to setting up and managing servers.
- **Email Integration**: Receive form submissions directly in your inbox.
- **Access Key Security**: Each user generates a unique API key for secure integration.
- **User-Friendly API**: Simple and easy-to-use API endpoints.
- **Free and Fast**: Start using WeForms instantly without paying a dime.

---

## 🌟 How It Works

1. **Register and Generate Access Key**:
   - Enter your email on the registration page.
   - Receive your unique API access key in your inbox.

2. **Integrate With Your Form**:
   - Add your access key to your HTML form.
   - Point your form's `action` attribute to the WeForms API URL.

3. **Submit and Receive Emails**:
   - When a user submits the form, you will receive the form's content directly in your email inbox.

---

## 🖥 Screenshots


### Key Generation Process
![Key Generation Process](https://raw.githubusercontent.com/gurjotsingh22022/WeForms/refs/heads/main/demo/step1.png)
_Easy-to-follow steps to generate your access key._

### API Documentation
![API Documentation](https://raw.githubusercontent.com/gurjotsingh22022/WeForms/refs/heads/main/demo/step2.png)
_Clear and concise documentation to guide you through the integration._

### Work With Every Technology
![Landing Page](https://raw.githubusercontent.com/gurjotsingh22022/WeForms/refs/heads/main/demo/workwithtech.png)
_WeForms work with every tech stack._
---

## 🛠 Tech Stack

WeForms is built with the latest and most robust technologies:

- **Frontend**: [Next.js](https://nextjs.org/), [React.js](https://reactjs.org/), [Tailwind CSS](https://tailwindcss.com/), [ShadCN UI](https://shadcn.dev/)
- **Backend**: [Multer](https://github.com/expressjs/multer), [Nodemailer](https://nodemailer.com/), [Bcrypt.js](https://github.com/dcodeIO/bcrypt.js), [NextAuth](https://next-auth.js.org/)
- **Database**: [Prisma](https://www.prisma.io/), [PostgreSQL](https://www.postgresql.org/), [SupaBase](https://supabase.io/)
- **Validation**: [Zod](https://zod.dev/)

---

## 📜 API Integration Guide

### Example HTML Form Integration

Here’s how to set up your form:

```html
<form action="https://api.weforms.com/submit" method="POST">
  <input type="hidden" name="accessKey" value="your-access-key-here" />
  <input type="text" name="name" placeholder="Your Name" required />
  <input type="email" name="email" placeholder="Your Email" required />
  <textarea name="message" placeholder="Your Message" required></textarea>
  <button type="submit">Send</button>
</form>
```

## 📜 License

WeForms is licensed under the [MIT License](LICENSE).

---

### 🌐 Connect with Us

- Website: [gurjotsingh.vercel.app](https://gurjotsingh.vercel.app)
- Email: [workwithgurjot@gmail.com](mailto:workwithgurjot@gmail.com)