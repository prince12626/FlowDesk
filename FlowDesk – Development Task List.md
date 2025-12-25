# 🧾 FlowDesk – Development Task List

## 1️⃣ Project Setup

Initialize Git repository

Setup frontend (Vite + React + TypeScript)

Setup backend (Node + Express)

Configure ESLint & Prettier

Setup basic folder structure (client / server)

Setup environment variables

Connect backend to MongoDB

## 2️⃣ Authentication (Minimal)

Create User model (username, email, password)

Password hashing (bcrypt)

Register API

Login API

JWT generation

Auth middleware

Protected routes

Frontend auth pages (Login / Register)

Auth context (store user & token)

Logout functionality

## 3️⃣ Project Management

Create Project model

Create project API

Get user projects API

Delete project API (owner only)

Frontend create project modal

Project list UI

Project detail page layout

## 4️⃣ Project Members & Invitations

Create Invitation model

Invite user by username API

Prevent duplicate invites

Accept invitation API

Reject invitation API

Add user to project members

Member role system (Owner / Member)

Frontend invitation panel UI

## 5️⃣ Join Project Flow

Show pending invitations on dashboard

Accept project invite (frontend)

Reject project invite (frontend)

Auto redirect to project on accept

## 6️⃣ Real-time Project Chat

Setup Socket.IO on backend

Setup Socket.IO client

Join project room via socket

Message schema

Send message event

Receive message event

Store messages in DB

Chat UI (message list)

Message input box

## 7️⃣ Collaborative Canvas

Setup canvas component

Basic draw functionality

Sync canvas state via socket

Handle multiple users drawing

Clear canvas action

Save canvas state per project

## 8️⃣ Task Management

Create Task model

Create task API

Get project tasks API

Update task status API

Assign task to member

Delete task API

Task board UI (Todo / In Progress / Done)

Drag & drop (optional v1.1)

## 9️⃣ Image Uploads

Setup image upload config

Upload image API

Save image URL in DB

Attach image to task

Image preview UI

File size validation

## 🔟 Project Tracking Dashboard

Count total tasks

Count completed tasks

Calculate progress %

Show active members

Recent activity log

Dashboard UI cards

## 1️⃣1️⃣ UI Polish & UX

Black & white theme consistency

Loading states

Error handling (toasts)

Empty states

Responsive layout

## 1️⃣2️⃣ Final Touch

Environment config cleanup

Production build

README update

Screenshots

Deploy frontend

Deploy backend

## 🧠 How tu isko use karega (important)

Ek time pe sirf ek section

Ek task complete → commit

Commit message clear:

feat(auth): implement JWT login.

```
1. Minimal Auth (login, register, logout)
2. Create Project
3. Invite more peoples in project via userName
4. they can join project
5. then they can chat together
6. A canvas besides them.
7. Create tasks in a specific project.
8. Images Upload.
9. Project tracking.
```
