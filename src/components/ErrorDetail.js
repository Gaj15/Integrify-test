const ErrorDetail = ({ message }) => {
  if (message) {
    return <div style={{ color: 'red', textAlign: 'center', height: '100%', minHeight: '100%' }}>
      <h3>Unfortunately, something went wrong.</h3>
      <p>
        <strong>Error occurred:</strong> <br />
        {message}
      </p>
    </div>
  }
  return <></>
};

export default ErrorDetail;