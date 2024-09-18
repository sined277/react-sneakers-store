import React from "react"
import ContentLoader from "react-content-loader"

const SneakersSkeleton = (props) => (
  <ContentLoader 
    speed={20}
    width={280}
    height={300}
    viewBox="0 0 280 300"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="20" y="38" rx="10" ry="10" width="217" height="100" /> 
    <rect x="20" y="150" rx="10" ry="10" width="217" height="28" /> 
    <rect x="20" y="192" rx="10" ry="10" width="171" height="28" /> 
    <rect x="22" y="261" rx="10" ry="10" width="107" height="30" /> 
    <rect x="173" y="248" rx="10" ry="10" width="71" height="44" />
  </ContentLoader>
)



export default SneakersSkeleton