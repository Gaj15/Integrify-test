import { useParams } from 'react-router-dom';
import { getUser } from '../services/users';
import { useEffect, useState } from 'react';
import ErrorDetail from './ErrorDetail';
import LoadingIndicator from './LoadingIndicator';
import UserDetailTable from './UserDetailTable';
import { getPersonalDetail, getAddressDetail, getContactDetail } from '../services/user_detail_mapping';

const UserDetail = () => {
  const { id } = useParams();
  const [userDetailResult, setUserDetailResult] = useState({ loading: true, user: {} });

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        setUserDetailResult({ user: await getUser(id), loading: false });
      } catch (error) {
        setUserDetailResult({ loading: false, error: error.message, user: {} });
      }
    };
    fetchUsers();

    return () => { };
  }, [id]);

  if (userDetailResult.error) {
    return <ErrorDetail message={userDetailResult.error} />
  }

  if (userDetailResult.loading) {
    return <LoadingIndicator message={`Loading details for user: #${id}`} />
  }

  return <div>
    <div >
      <UserDetailTable detail={ getPersonalDetail(userDetailResult.user) } />
      <UserDetailTable detail={ getAddressDetail(userDetailResult.user) } />
      <UserDetailTable detail={ getContactDetail(userDetailResult.user) } />
    </div>
  </div>
};

export default UserDetail;