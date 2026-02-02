import { useState, type FormEvent } from 'react';
import { Send, Loader2, CheckCircle, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FormData {
    name: string;
    email: string;
    phone: string;
    message: string;
}

interface FormErrors {
    name?: string;
    email?: string;
    message?: string;
}

type FormStatus = 'idle' | 'submitting' | 'success' | 'error';

export default function ContactForm() {
    const [formData, setFormData] = useState<FormData>({
        name: '',
        email: '',
        phone: '',
        message: '',
    });
    const [errors, setErrors] = useState<FormErrors>({});
    const [status, setStatus] = useState<FormStatus>('idle');

    const validateForm = (): boolean => {
        const newErrors: FormErrors = {};

        if (!formData.name.trim()) {
            newErrors.name = 'Bitte geben Sie Ihren Namen ein.';
        }

        if (!formData.email.trim()) {
            newErrors.email = 'Bitte geben Sie Ihre E-Mail-Adresse ein.';
        } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
            newErrors.email = 'Bitte geben Sie eine gültige E-Mail-Adresse ein.';
        }

        if (!formData.message.trim()) {
            newErrors.message = 'Bitte geben Sie eine Nachricht ein.';
        } else if (formData.message.trim().length < 10) {
            newErrors.message = 'Die Nachricht sollte mindestens 10 Zeichen lang sein.';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        if (!validateForm()) return;

        setStatus('submitting');

        // Simulate form submission
        // In production, this would be an actual API call
        try {
            await new Promise((resolve) => setTimeout(resolve, 1500));
            setStatus('success');
            setFormData({ name: '', email: '', phone: '', message: '' });
        } catch {
            setStatus('error');
        }
    };

    const handleChange = (
        e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
        // Clear error when user starts typing
        if (errors[name as keyof FormErrors]) {
            setErrors((prev) => ({ ...prev, [name]: undefined }));
        }
    };

    if (status === 'success') {
        return (
            <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                <CheckCircle className="w-12 h-12 text-green-600 mx-auto mb-4" />
                <h3 className="text-xl font-semibold text-green-900 mb-2">
                    Nachricht gesendet!
                </h3>
                <p className="text-green-700">
                    Vielen Dank für Ihre Anfrage. Wir werden uns schnellstmöglich bei Ihnen melden.
                </p>
                <button
                    onClick={() => setStatus('idle')}
                    className="mt-6 px-4 py-2 text-green-700 hover:text-green-900 font-medium"
                >
                    Neue Nachricht senden
                </button>
            </div>
        );
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-6">
            {status === 'error' && (
                <div className="bg-red-50 border border-red-200 rounded-lg p-4 flex items-start gap-3">
                    <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0 mt-0.5" />
                    <p className="text-red-700 text-sm">
                        Es ist ein Fehler aufgetreten. Bitte versuchen Sie es später erneut.
                    </p>
                </div>
            )}

            {/* Name */}
            <div>
                <label
                    htmlFor="name"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                >
                    Name <span className="text-red-500">*</span>
                </label>
                <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg border bg-white transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent',
                        errors.name
                            ? 'border-red-300 bg-red-50'
                            : 'border-neutral-300 hover:border-neutral-400'
                    )}
                    aria-invalid={!!errors.name}
                    aria-describedby={errors.name ? 'name-error' : undefined}
                />
                {errors.name && (
                    <p id="name-error" className="mt-1 text-sm text-red-600">
                        {errors.name}
                    </p>
                )}
            </div>

            {/* Email */}
            <div>
                <label
                    htmlFor="email"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                >
                    E-Mail <span className="text-red-500">*</span>
                </label>
                <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg border bg-white transition-colors',
                        'focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent',
                        errors.email
                            ? 'border-red-300 bg-red-50'
                            : 'border-neutral-300 hover:border-neutral-400'
                    )}
                    aria-invalid={!!errors.email}
                    aria-describedby={errors.email ? 'email-error' : undefined}
                />
                {errors.email && (
                    <p id="email-error" className="mt-1 text-sm text-red-600">
                        {errors.email}
                    </p>
                )}
            </div>

            {/* Phone */}
            <div>
                <label
                    htmlFor="phone"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                >
                    Telefon <span className="text-neutral-400">(optional)</span>
                </label>
                <input
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg border border-neutral-300 bg-white hover:border-neutral-400 focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent transition-colors"
                />
            </div>

            {/* Message */}
            <div>
                <label
                    htmlFor="message"
                    className="block text-sm font-medium text-neutral-700 mb-2"
                >
                    Nachricht <span className="text-red-500">*</span>
                </label>
                <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className={cn(
                        'w-full px-4 py-3 rounded-lg border bg-white transition-colors resize-none',
                        'focus:outline-none focus:ring-2 focus:ring-[--color-primary-500] focus:border-transparent',
                        errors.message
                            ? 'border-red-300 bg-red-50'
                            : 'border-neutral-300 hover:border-neutral-400'
                    )}
                    aria-invalid={!!errors.message}
                    aria-describedby={errors.message ? 'message-error' : undefined}
                />
                {errors.message && (
                    <p id="message-error" className="mt-1 text-sm text-red-600">
                        {errors.message}
                    </p>
                )}
            </div>

            {/* Submit */}
            <button
                type="submit"
                disabled={status === 'submitting'}
                className={cn(
                    'w-full flex items-center justify-center gap-2 px-6 py-3 rounded-lg font-medium transition-all',
                    status === 'submitting'
                        ? 'bg-neutral-300 text-neutral-500 cursor-not-allowed'
                        : 'bg-[--color-primary-900] text-white hover:bg-[--color-primary-800] hover:translate-y-[-1px] hover:shadow-md'
                )}
            >
                {status === 'submitting' ? (
                    <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        Wird gesendet...
                    </>
                ) : (
                    <>
                        <Send className="w-5 h-5" />
                        Nachricht senden
                    </>
                )}
            </button>

            <p className="text-xs text-neutral-500 text-center">
                Mit dem Absenden stimmen Sie unserer{' '}
                <a href="/datenschutz/" className="text-[--color-primary-700] hover:underline">
                    Datenschutzerklärung
                </a>{' '}
                zu.
            </p>
        </form>
    );
}
