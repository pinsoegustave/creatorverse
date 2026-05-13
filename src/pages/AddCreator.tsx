import { useNavigate } from 'react-router-dom'
import CreatorForm from '../components/CreatorForm'
import { supabase } from '../client';

export default function AddCreator() {
    const navigate = useNavigate();

  const handleSubmit = async (values: any) => {
    const { error } = await supabase
        .from('creators')
        .insert([
            {
                name: values.name,
                url: values.url,
                description: values.description,
                imageURL: values.imageURL
            }
        ])
    
        if (error) {
            console.error('Error adding creator:', error.message)
            alert('Something went wrong, check the console')
        } else {
            console.log('Creator added successfully!')
            navigate('/')
        }
    }

  return <CreatorForm onSubmit={handleSubmit} />
}