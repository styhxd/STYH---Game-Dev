import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

console.log("[STYH SYSTEM] - Boot Sequence Initiated");

// FAILCHECK 1: Verify Root Element
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error("[STYH SYSTEM] - FATAL: Root element missing");
  document.body.innerHTML = "<h1 style='color:white'>FATAL ERROR: ROOT MISSING</h1>";
  throw new Error("Could not find root element to mount to");
}

console.log("[STYH SYSTEM] - Root Element Acquired");

// FAILCHECK 2: Safe Mounting
try {
  const root = ReactDOM.createRoot(rootElement);
  
  console.log("[STYH SYSTEM] - React Root Created. Rendering Application...");
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("[STYH SYSTEM] - Render Command Sent");
} catch (error) {
  // FAILCHECK 3: Catastrophic Failure Handler
  console.error("[STYH SYSTEM] - RENDER FAILURE:", error);
  if (rootElement) {
    rootElement.innerHTML = `
      <div style="height:100vh; display:flex; flex-direction:column; justify-content:center; align-items:center; color:#ff003c; font-family:monospace; text-align:center;">
        <h2 style="font-size:2rem; margin-bottom:1rem;">SYSTEM FAILURE</h2>
        <p style="color:white; max-width:600px;">${error instanceof Error ? error.message : "Unknown Error"}</p>
        <div style="margin-top:2rem; padding:1rem; border:1px solid #333; background:#111;">
          CODE: 0xDEAD_RENDER<br/>
          Check console for details.
        </div>
      </div>
    `;
  }
}