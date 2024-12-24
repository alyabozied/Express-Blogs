const handleLogin = async () => {
    // Simulate setting a token after successful login
    document.cookie = 'token=your_jwt_token; path=/;';
    window.location.href = '/dashboard'; // Redirect after login
  };
export{
    handleLogin
}