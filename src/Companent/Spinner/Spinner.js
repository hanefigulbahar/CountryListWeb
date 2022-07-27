import React from "react";
export default function LoadingSpinner() {
  return (
    <div className="d-flex align-items-center justify-content-center mt-5">
      <strong>Loading...</strong>
      <div className="spinner-border ml-auto" role="status" aria-hidden="true"></div>
    </div>
  );
}