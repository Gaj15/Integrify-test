
export const getPersonalDetail = (userDetail) => {
  return {
    header: 'Personal Details',
    items: [
      {
        key: 'Name',
        value: userDetail.name,
      },
      {
        key: 'Username',
        value: userDetail.username
      }
    ]
  };
};

export const getAddressDetail = (userDetail) => {
  return {
    header: 'Address',
    items: [
      {
        key: 'Suite',
        value: userDetail.address.suite,
      },
      {
        key: 'Street',
        value: userDetail.address.street,
      },
      {
        key: 'City',
        value: userDetail.address.city,
      },
      {
        key: 'Zip Code',
        value: userDetail.address.zipcode
      }
    ]
  };
};

export const getContactDetail = (userDetail) => {
   return {
    header: 'Contact Info',
    items: [
      {
        key: 'Phone',
        value: userDetail.phone,
      },
      {
        key: 'Street',
        value: userDetail.email,
      },
      {
        key: 'City',
        value: userDetail.website,
      },
      {
        key: 'Zip Code',
        value: userDetail.company.name
      }
    ]
  };
};