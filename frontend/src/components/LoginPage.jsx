import { useState } from 'react'

export default function LoginPage({ onLogin }) {
    const [user, setUser] = useState(null)
    const [formData, setFormData] = useState({ name: '', number: '' })
    const [errors, setErrors] = useState({ name: '', number: '' })

    const handleNameChange = (e) => {
        const value = e.target.value
        // Allow only alphabets (no spaces, no numbers, no special characters)
        const filtered = value.replace(/[^A-Za-z]/g, '')
        setFormData({ ...formData, name: filtered })
        
        if (filtered && filtered.length < 2) {
            setErrors({ ...errors, name: 'Name must be at least 2 characters' })
        } else {
            setErrors({ ...errors, name: '' })
        }
    }

    const handleNumberChange = (e) => {
        const value = e.target.value
        // Allow only digits, max 10
        const filtered = value.replace(/[^0-9]/g, '').slice(0, 10)
        setFormData({ ...formData, number: filtered })
        
        if (filtered && filtered.length !== 10) {
            setErrors({ ...errors, number: 'Phone number must be exactly 10 digits' })
        } else {
            setErrors({ ...errors, number: '' })
        }
    }

    const handleLoginSubmit = (e) => {
        e.preventDefault()
        if (!formData.name.trim() || !formData.number.trim()) return
        if (formData.name.length < 2 || formData.number.length !== 10) {
            setErrors({
                name: formData.name.length < 2 ? 'Name must be at least 2 characters' : '',
                number: formData.number.length !== 10 ? 'Phone number must be exactly 10 digits' : ''
            })
            return
        }

        setUser({
            name: formData.name.trim(),
            number: formData.number.trim(),
            picture: `https://api.dicebear.com/7.x/initials/svg?seed=${formData.name}`
        })
    }

    const selectRole = (role) => {
        if (user) {
            onLogin({ ...user, role })
        }
    }

    return (
        <div className="login-container">
            {!user ? (
                <div className="login-card card">
                    <h2>Welcome to Qura</h2>
                    <p>Please enter your details to continue</p>

                    <form onSubmit={handleLoginSubmit} className="login-form">
                        <div className="form-group text-left">
                            <label>Full Name</label>
                            <input
                                type="text"
                                value={formData.name}
                                onChange={handleNameChange}
                                placeholder="Ex. JohnDoe"
                                required
                            />
                            {errors.name && <span className="error-text">{errors.name}</span>}
                        </div>
                        <div className="form-group text-left">
                            <label>Phone Number</label>
                            <input
                                type="tel"
                                value={formData.number}
                                onChange={handleNumberChange}
                                placeholder="Ex. 1234567890"
                                maxLength="10"
                                required
                            />
                            {errors.number && <span className="error-text">{errors.number}</span>}
                        </div>
                        <button type="submit" className="btn-primary mt-4">
                            Continue
                        </button>
                    </form>
                </div>
            ) : (
                <div className="role-selection-card card">
                    <h2>Welcome, {user.name}!</h2>
                    <img src={user.picture} alt="Profile" className="profile-img" />
                    <p>Please select your role to continue:</p>
                    <div className="role-buttons">
                        <button
                            className="btn-primary role-btn"
                            onClick={() => selectRole('user')}
                        >
                            I am a User
                        </button>
                        <button
                            className="btn-secondary role-btn"
                            onClick={() => selectRole('receptionist')}
                        >
                            I am a Receptionist
                        </button>
                    </div>
                </div>
            )}
        </div>
    )
}
