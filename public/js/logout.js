const logout = async () => {
    const response = await fetch('/api/user/logout', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
    });
    response.ok ? document.location.replace('/') : alert('Could not log out. Try Again');
  };