import { Component } from 'react'

export default class ErrorBoundary extends Component {
  state = { hasError: false, error: null }

  static getDerivedStateFromError(error) {
    return { hasError: true, error }
  }

  componentDidCatch(error, info) {
    console.error('ErrorBoundary caught:', error, info)
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '2rem', background: '#fff5f5', border: '1px solid #fecaca', borderRadius: 12, margin: '1rem' }}>
          <p style={{ color: '#dc2626', fontSize: 14 }}>Something went wrong in this section.</p>
          <button onClick={() => this.setState({ hasError: false })} style={{ marginTop: 8, fontSize: 12, color: '#666', cursor: 'pointer', background: 'none', border: 'none' }}>
            Try again
          </button>
        </div>
      )
    }
    return this.props.children
  }
}
