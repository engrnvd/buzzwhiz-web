export default function WebsiteFavicon({ website, alt }: { website: string, alt?: string }) {
  return (
    <a href={website} target="_blank">
      <img src={`https://www.google.com/s2/favicons?domain=${website}&sz=16`}
           alt={alt}
           title={alt}
           className="rounded-full"
      />
    </a>
  )
}
