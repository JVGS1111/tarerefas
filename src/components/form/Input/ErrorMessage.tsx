interface ErrorMessageProps {
  error: string
}
export function ErrorMessage({ error }: ErrorMessageProps) {
  return <div className="text-sm text-red">{error}</div>
}
