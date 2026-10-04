/**
 * The animated RGB sky. Rendered for every visitor but only made visible — and
 * therefore only animated — by the night theme; in day mode every layer is
 * `display: none`, so nothing paints and no keyframes run.
 *
 * Purely decorative, so it is marked aria-hidden and kept out of the pointer
 * path. Fixed positioning keeps it behind the page while scrolling.
 */
export default function NightBackground() {
  return (
    <div
      aria-hidden="true"
      className="night-sky pointer-events-none fixed inset-0 -z-10 overflow-hidden"
    >
      <span className="night-aurora" />
      <span className="night-orb night-orb-a" />
      <span className="night-orb night-orb-b" />
      <span className="night-orb night-orb-c" />
      <span className="night-grid" />
    </div>
  );
}
