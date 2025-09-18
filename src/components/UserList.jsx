import { useApp } from "../context/AppContext";

export default function UserList() {
  const { users = [], search = "", page, setPage, pageSize } = useApp();

  const filtered = users.filter((u) =>
    [u.name, u.email, u.role].some((v) =>
      v.toLowerCase().includes(search.toLowerCase())
    )
  );

  const start = (page - 1) * pageSize;
  const paged = filtered.slice(start, start + pageSize);
  const totalPages = Math.max(1, Math.ceil(filtered.length / pageSize));
  const isMobile = typeof window !== "undefined" && window.innerWidth < 700;

  return (
    <div className="stack">
      <div className="pill">{filtered.length} users found</div>

      {/* Desktop: Table view */}
      {!isMobile && (
        <table className="table">
          <thead>
            <tr>
              <th>Name</th><th>Email</th><th>Role</th>
            </tr>
          </thead>
          <tbody>
            {paged.map((u, idx) => (
              <tr key={idx}>
                <td>{u.name}</td>
                <td style={{ color: "var(--text)" }}>{u.email}</td>
                <td>
                  <span className={`pill role-${u.role.toLowerCase()}`}>
                    {u.role}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {/* Mobile: Card view */}
      {isMobile && (
        <div className="grid">
          {paged.map((u, idx) => (
            <div className="card" key={idx}>
              <div style={{ fontWeight: 600, fontSize: "1.1rem" }}>{u.name}</div>
              <div style={{ color: "var(--text)", fontSize: "0.9rem" }}>{u.email}</div>
              <span
                className={`pill role-${u.role.toLowerCase()}`}
                style={{ marginTop: 8 }}
              >
                {u.role}
              </span>
            </div>
          ))}
        </div>
      )}

      <div className="footer">
        <button
          className="btn ghost"
          disabled={page === 1}
          onClick={() => setPage(page - 1)}
        >
          ⬅ Prev
        </button>
        <div className="pill">Page {page} / {totalPages}</div>
        <button
          className="btn ghost"
          disabled={page === totalPages}
          onClick={() => setPage(page + 1)}
        >
          Next ➡
        </button>
      </div>
    </div>
  );
}