import { Hono } from "npm:hono";
import { cors } from "npm:hono/cors";
import { logger } from "npm:hono/logger";
import * as kv from "./kv_store.tsx";
import { handleCheckout, handleWebhook } from "./checkout.tsx";

const app = new Hono();

// Enable logger
app.use('*', logger(console.log));

// Enable CORS for all routes and methods
app.use(
  "/*",
  cors({
    origin: "*",
    allowHeaders: ["Content-Type", "Authorization"],
    allowMethods: ["GET", "POST", "PUT", "DELETE", "OPTIONS"],
    exposeHeaders: ["Content-Length"],
    maxAge: 600,
  }),
);

// Health check endpoint
app.get("/make-server-efd1629b/health", (c) => {
  return c.json({ status: "ok" });
});

// Checkout endpoint
app.post("/make-server-efd1629b/checkout", handleCheckout);

// Webhook endpoint for payment notifications
app.post("/make-server-efd1629b/webhook", handleWebhook);

Deno.serve(app.fetch);