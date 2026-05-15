const paths = {
  nfc: "M8 12a4 4 0 0 1 4-4m-7 4a7 7 0 0 1 7-7m4 3 3 3m0 0-3 3m3-3H9m4 8h6a2 2 0 0 0 2-2v-3m-8 5H7a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6",
  qr: "M5 5h5v5H5V5Zm9 0h5v5h-5V5ZM5 14h5v5H5v-5Zm9 0h2v2h-2v-2Zm4 0h1v5h-5v-1h4v-4Zm-2 2h2",
  profile:
    "M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Zm7 8a7 7 0 0 0-14 0m13-8 2 2 3-4",
  links:
    "M10 13a5 5 0 0 0 7.07 0l2.12-2.12a5 5 0 0 0-7.07-7.07L11 4.93m3 6.14a5 5 0 0 0-7.07 0L4.81 13.2a5 5 0 0 0 7.07 7.07L13 19.07",
  social:
    "M18 8a3 3 0 1 0-2.83-4M6 14a3 3 0 1 0-2.83-4M18 20a3 3 0 1 0-2.83-4M8.6 11.4l6.8-3.8m-6.8 5 6.8 3.8",
  iban:
    "M4 7h16M6 7V5h12v2M6 10v7m4-7v7m4-7v7m4-7v7M4 19h16",
  catalog:
    "M7 3h7l4 4v14H7a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2Zm7 0v5h5M8 13h8M8 17h6",
  team:
    "M16 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm-8 0a3 3 0 1 0 0-6 3 3 0 0 0 0 6Zm8 2a5 5 0 0 1 5 5v1H11v-1a5 5 0 0 1 5-5Zm-8 0a5 5 0 0 0-5 5v1h5",
  briefcase:
    "M10 6V5a2 2 0 0 1 2-2h0a2 2 0 0 1 2 2v1m-9 4h14M5 6h14a2 2 0 0 1 2 2v9a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3V8a2 2 0 0 1 2-2Z",
  crown:
    "m3 8 4 4 5-7 5 7 4-4-2 11H5L3 8Z",
  spark:
    "M12 3l1.6 5.4L19 10l-5.4 1.6L12 17l-1.6-5.4L5 10l5.4-1.6L12 3Zm7 12 .8 2.2L22 18l-2.2.8L19 21l-.8-2.2L16 18l2.2-.8L19 15Z",
};

export function Icon({ name, className = "h-6 w-6" }) {
  return (
    <svg
      aria-hidden="true"
      className={className}
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.7"
      viewBox="0 0 24 24"
    >
      <path d={paths[name] ?? paths.spark} />
    </svg>
  );
}
