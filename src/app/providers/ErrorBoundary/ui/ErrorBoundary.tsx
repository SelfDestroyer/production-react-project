import React, { type ErrorInfo } from 'react'

interface IErrorBoundaryProps {
  children: JSX.Element
  fallback: JSX.Element
}

interface IErrorBoundaryState {
  hasError: boolean
}

class ErrorBoundary extends React.Component<IErrorBoundaryProps, IErrorBoundaryState> {
  constructor (props: IErrorBoundaryProps) {
    super(props)
    this.state = { hasError: false }
  }

  static getDerivedStateFromError (error: Error): { hasError: boolean } {
    return { hasError: true }
  }

  componentDidCatch (error: Error, info: ErrorInfo): void {
    console.log('Catch error!')
    console.error(error)
    console.error(info)
  }

  render (): JSX.Element {
    const { hasError } = this.state
    const { fallback, children } = this.props

    if (hasError) {
      return fallback
    }

    return children
  }
}

export default ErrorBoundary
