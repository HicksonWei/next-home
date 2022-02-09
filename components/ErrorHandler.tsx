const ErrorHandler = ({ error }: { error: unknown }) => {
  const { message } = error as Error

  return (
    <div role="alert">
      <h2>Error:</h2>
      <pre>{message}</pre>
    </div>
  )
}

export default ErrorHandler
