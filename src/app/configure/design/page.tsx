import { db } from "@/db"
import { notFound } from "next/navigation"
import DesignConfigurator from "./design-configurator"

interface DesignPageProps {
  searchParams: {
    [key: string]: string | string[] | undefined
  }
}


const DesignPage = async ({searchParams}: DesignPageProps) => {
  const {id} = searchParams

  if(!id || typeof id !== "string") {
    return notFound()
  }

  const configuration = await db.configuration.findUnique({
    where: {id}
  })

  if(!configuration) {
    return notFound()
  }

  const {imageUrl, width, height} = configuration

  return (
    <DesignConfigurator configId={configuration.id} imageDimensions={{width, height}} imageUrl={imageUrl} />
  )
}

export default DesignPage