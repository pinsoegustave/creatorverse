import { useState } from 'react'

interface CreatorFormProps {
  initialValues?: {
    name: string
    description: string
    youtube: string
    instagram: string
    x: string
    imageUrl: string
  }
  onSubmit: (values: any) => void
}

const defaultValues = {
  name: '',
  description: '',
  youtube: '',
  instagram: '',
  x: '',
  imageUrl: '',
}

export default function CreatorForm({ initialValues, onSubmit }: CreatorFormProps) {
  const [formData, setFormData] = useState(initialValues || defaultValues)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    onSubmit(formData)
  }

  return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="w-150 bg-[#111] rounded-2xl border-2 border-[#5185B4] shadow-xl p-10 flex flex-col gap-6">
        
        <h1 className="text-white text-3xl font-bold uppercase">
          {initialValues ? 'Edit Creator' : 'Add Creator'}
        </h1>

        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          
          {/* Name */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">Name</label>
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="John Doe"
              required
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Image URL */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">Image URL</label>
            <input
              type="text"
              name="imageUrl"
              value={formData.imageUrl}
              onChange={handleChange}
              placeholder="https://example.com/image.jpg"
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* YouTube */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">YouTube URL</label>
            <input
              type="text"
              name="youtube"
              value={formData.youtube}
              onChange={handleChange}
              placeholder="https://youtube.com/@handle"
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Instagram */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">Instagram URL</label>
            <input
              type="text"
              name="instagram"
              value={formData.instagram}
              onChange={handleChange}
              placeholder="https://instagram.com/handle"
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* X */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">X (Twitter) URL</label>
            <input
              type="text"
              name="x"
              value={formData.x}
              onChange={handleChange}
              placeholder="https://x.com/handle"
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition"
            />
          </div>

          {/* Description */}
          <div className="flex flex-col gap-1">
            <label className="text-gray-400 text-sm uppercase">Description</label>
            <textarea
              name="description"
              value={formData.description}
              onChange={handleChange}
              placeholder="A short description about this creator..."
              rows={4}
              className="bg-black text-white border border-[#5185B4] rounded-lg p-3 focus:outline-none focus:border-white transition resize-none"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="bg-[#5185B4] text-white font-bold uppercase py-4 rounded-lg hover:opacity-90 transition"
          >
            {initialValues ? 'Save Changes' : 'Add Creator'}
          </button>

        </form>
      </div>
    </div>
  )
}