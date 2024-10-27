function Logout() {
  fetch("/users/sign_out", {
    method: 'DELETE',
  });
}

export default function Navbar() {
  return(
    <nav>
      <ul>
        <li>
          <a href="/" onClick={() => Logout()}>Logout</a>
        </li>
      </ul>
    </nav>
  )
}
