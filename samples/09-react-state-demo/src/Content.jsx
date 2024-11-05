function Content({ username, onLogout }) {
  return (
    <>
      Hello {username}
      <button onClick={onLogout}>Logout</button>
    </>
  );
}

export default Content;
