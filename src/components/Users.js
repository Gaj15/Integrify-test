import { getUsers } from '../services/users';
import { useEffect, useState } from 'react';
import { Grid } from '@material-ui/core';
import UsersCardItem from './UsersCardItem';
import ErrorDetail from './ErrorDetail';
import LoadingIndicator from './LoadingIndicator';

const Users = () => {
  const [usersResult, setUsersResult] = useState({ loading: true, error: undefined, users: [] });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUsersResult({ users: await getUsers(), loading: false});
      } catch (error) {
        setUsersResult({ loading: false, error: error.message, users: [] });
      }
    };
    fetchUsers();

    return () => { };
  }, []);

  <ErrorDetail message={usersResult.error} />

  if (usersResult.loading) {
    return <LoadingIndicator message="Loading users..." />
  }

  return <Grid container spacing={3}>
    {usersResult.users.map(user => <UsersCardItem key={user.id} user={user} />)}
  </Grid>
};

export default Users;