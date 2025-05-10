# lni.cashier — POS Software for Modern Retail

**lni.cashier** is a point-of-sale (POS) system designed for mobile, tablet, and desktop environments. Developed with React and modern web standards, this solution supports both cloud-based usage and offline functionality via Service Workers. It is ideal for small businesses and freelancers who need a lightweight, secure, and cost-effective way to manage sales, inventory, and financial records.

---

## 🌐 Features

- ✅ **Responsive UI** – Optimized for mobile, tablet, and desktop
- 🌙 **Dark/Light Mode Toggle**
- 📦 **Product and Service Management**
- 💳 **Cash Payments & Card Terminals** (external)
- 📤 **Exports for Tax Consultants**
- 🧾 **End-of-Day Closing (Z-Report)**
- 🧍 **Multi-User Login System**
- 🧠 **Barcode-Based Product Recognition**
- 📡 **Offline-Ready PWA** (with optional download and install)

---

## 🛠️ Technologies Used

- **Frontend:** React, SCSS Modules
- **Backend:** [Pluggable: Supabase, Node.js or other]
- **Styling Structure:**
  - `index.scss` for global root styles
  - Component-level styles as `*.module.scss` in subfolders

---

## 🔐 User Roles & Routes

### Admin Routes
- `/admin/dashboard` – Admin Dashboard
- `/admin/register` – Registration & Login
- `/admin/employees` – Manage Employees
- `/admin/exports` – Manage Export Templates
- `/admin/products` – Product Management
- `/admin/services` – Service Management
- `/admin/discounts` – Manage Discounts
- `/admin/customers` – Customer Management
- `/admin/settings` – Global Settings
- `/admin/logs` – Logs & User Activity
- `/admin/support` – Support Inbox

### Staff Routes
- `/pos` – Cash Register Interface
- `/sales` – Sales History
- `/login` – Staff Login
- `/end-of-day` – Daily Closing Summary
- `/support` – Access to Support Inbox

---

## 🚀 Planned as SaaS

This project is designed for **SaaS deployment** with a cost-efficient license model and optional export capability. Hosting via Vercel or self-hosting options available.

---

## 📦 Installation (Coming Soon)

```bash
# Clone the repository
git clone https://github.com/YOUR_USERNAME/lni.cashier.git

# Install dependencies
cd lni.cashier
yarn install

# Start development server
yarn dev
