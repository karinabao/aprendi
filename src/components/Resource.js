import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import SvgIcon from './SvgIcon'

const Resource = ({content, nextPrevFunctions, deleteResource, removeResource}) => {
  console.log(content)
  let renderedContent
  switch(content.resource_type) {
    case "video":
      renderedContent = renderVideo(content)
      break
    case "rich_text":
      renderedContent = renderRichText(content)
      break
  }

  return (
    <div className="resource">
      <div className="resource__header">
          {nextPrevFunctions.prev &&
            <div className="resource__header__arrow prev" onClick={nextPrevFunctions.prev}>
              <SvgIcon name="arrow" />
            </div>
          }
          {nextPrevFunctions.next &&
            <div className="resource__header__arrow next" onClick={nextPrevFunctions.next}>
              <SvgIcon name="arrow" />
            </div>
          }
        <div className="resource__header__text">
          <h1>{content.title}</h1>
          {content.short_description &&
            <p>{content.short_description}</p>
          }
          {content.source_url &&
            <a href={"//" + content.source_url}>{content.source_organization || content.source_url}</a>
          }
          {removeResource &&
            <div className="button" onClick={() => removeResource(content._id)}>Remove Resource From Collection</div>
          }
          <div className="button" onClick={() => deleteResource(content._id)}>Delete Resource</div>
        </div>
      </div>
      <div className="resource__content">
        {renderedContent}
      </div>
    </div>
  )
}

const renderVideo = ({video_provider, resource_url}) => {
  if (!resource_url) { return null }
  let videoContent;
  if (video_provider == "youtube") {
    videoContent = (
      <iframe
        src={resource_url}
        frameborder="0"
        allow="autoplay; encrypted-media">
      </iframe>
    )
  } else {
    videoContent = (
      <iframe
        src={resource_url}
        width="640"
        height="360"
        frameborder="0">
      </iframe>
    )
  }
  return (
    <div className="resource__video">
      {videoContent}
    </div>
  )
}

const renderRichText = ({rich_text}) => {
  return <div className="resource__richtext" dangerouslySetInnerHTML={{__html: rich_text}} />
}

export default Resource
