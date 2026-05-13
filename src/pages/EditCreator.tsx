import { useNavigate, useParams } from 'react-router-dom'
import CreatorForm from '../components/CreatorForm'
import { useEffect, useState } from 'react'
import { supabase } from '../client'

export default function EditCreator() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [initialValues, setInitialValues] = useState<any>(undefined)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchCreator = async() => {
      const {data, error} = await supabase
        .from('creators')
        .select('*')
        .eq('id', id)
        .single()
      
        if (error) {
          console.error('Error fetching creator:', error.message)
        }
        else {
          setInitialValues({
            name: data.name,
            url: data.url,
            description: data.description,
            imageURL: data.imageURL
          })
        }
        setLoading(false)
    }
    fetchCreator()
  }, [id])

  const handleSubmit = async (values: any) => {
    const { error } = await supabase.from('creators').update({
      name: values.name,
      url: values.url,
      description: values.description,
      imageURL: values.imageURL
    })
    .eq('id', id)

    if (error) {
      console.error('Error updating creator:', error.message)
    } else {
      alert('Creator updated successfully!')
      navigate(`/viewcreator/${id}`)
    }
  }

  if (loading) return <p className="text-white text-center mt-10">Loading...</p>

  return <CreatorForm initialValues={initialValues} onSubmit={handleSubmit} />
}