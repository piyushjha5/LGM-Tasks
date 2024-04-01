function showLoader() {
    document.getElementById('loader').style.display = 'block';
  }
  
  function hideLoader() {
    document.getElementById('loader').style.display = 'none';
  }
  
  function showUsers(users) {
    const userCardGrid = document.getElementById('userCardGrid');
    userCardGrid.innerHTML = '';
  
    users.forEach(user => {
      const userCard = document.createElement('div');
      userCard.classList.add('user-card');
      userCard.innerHTML = `
        <img src="${user.avatar}" alt="${user.first_name} ${user.last_name}">
        <h3>${user.first_name} ${user.last_name}</h3>
        <p>Email: ${user.email}</p>
      `;
      userCardGrid.appendChild(userCard);
    });
  }
  
  async function getUsers() {
    showLoader();
  
    try {
      const response = await fetch('https://reqres.in/api/users?page=1');
      const data = await response.json();
  
      if (data.data && data.data.length > 0) {
        showUsers(data.data);
      } else {
        alert('No users found.');
      }
  
      hideLoader();
    } catch (error) {
      alert('Please connect with network for data fetching.');
      hideLoader();
    }
  }
  
