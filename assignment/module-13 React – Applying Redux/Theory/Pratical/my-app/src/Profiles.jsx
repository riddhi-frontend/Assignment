import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Profiles = () => {
  const [profiles, setProfiles] = useState([]);
  const [newProfile, setNewProfile] = useState({ name: '', email: '' });

  useEffect(() => {
    const fetchProfiles = async () => {
      const response = await axios.get('/api/profiles');
      setProfiles(response.data);
    };
    fetchProfiles();
  }, []);

  const handleAddProfile = async (e) => {
    e.preventDefault();
    const response = await axios.post('/api/profiles', newProfile);
    setProfiles([...profiles, response.data]);
    setNewProfile({ name: '', email: '' });
  };

  const handleDeleteProfile = async (id) => {
    await axios.delete(`/api/profiles/${id}`);
    setProfiles(profiles.filter((profile) => profile.id !== id));
  };

  return (
    <div>
      <h2>Profiles</h2>
      <form onSubmit={handleAddProfile}>
        <input
          type="text"
          value={newProfile.name}
          onChange={(e) => setNewProfile({ ...newProfile, name: e.target.value })}
          placeholder="Name"
          required
        />
        <input
          type="email"
          value={newProfile.email}
          onChange={(e) => setNewProfile({ ...newProfile, email: e.target.value })}
          placeholder="Email"
          required
        />
        <button type="submit">Add Profile</button>
      </form>
      <ul>
        {profiles.map((profile) => (
          <li key={profile.id}>
            {profile.name} ({profile.email})
            <button onClick={() => handleDeleteProfile(profile.id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Profiles