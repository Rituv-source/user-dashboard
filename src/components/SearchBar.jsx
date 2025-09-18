import { useApp } from '../context/AppContext.jsx'
export default function SearchBar() {
  const { search, setSearch, resetPage } = useApp()
  const onChange = (e) => {
    setSearch(e.target.value)
    resetPage()
  }
  return (
    <input
      type="text"
      placeholder="Search name, email, or role…"
      value={search}
      onChange={onChange}
      aria-label="Search users"
      style={{ minWidth: 260 }}
    />
  )
}