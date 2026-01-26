import { useState } from "react"
import { generationApi } from "../../api/generationApi";

const useGenerationGreeting = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const generationGreeting = async (dataPrompt: string) => {
    setLoading(true)
    setError(null)
    try {
      const response = await generationApi(dataPrompt)

      return response.content
    } catch (error) {
      setError("Ошибка генерации");
      console.log(error);

    } finally {
      setLoading(false)
    }
  };

  return { loading, error, generationGreeting }
}

export default useGenerationGreeting