// components/InstagramEmbed.js
import Script from 'next/script';

const InstagramEmbed = ({ url, caption }) => {
  return (
    <div className="flex flex-col bg-white rounded-lg md:my-3 sm:my-3 lg:my-4 shadow-md">
      <div className="aspect-ratio aspect-video">
        <blockquote
          className="instagram-media"
          data-instgrm-captioned
          data-instgrm-permalink={url}
          data-instgrm-version="14"
          style={{
            background: '#FFF',
            border: '0',
            borderRadius: '3px',
            boxShadow: '0 0 1px 0 rgba(0,0,0,0.5),0 1px 10px 0 rgba(0,0,0,0.15)',
            margin: '1px',
            maxWidth: '600px', // Increase the maxWidth
            minWidth: '326px',
            padding: '0',
            width: '100%',
            height: '550px', // Increase the height
          }}
        >
          <a
            href={url}
            style={{
              background: '#FFFFFF',
              lineHeight: '0',
              padding: '0 0',
              textAlign: 'center',
              textDecoration: 'none',
              width: '100%',
              height: '100%',
            }}
            target="_blank"
          >
            {/* Your Instagram embed code here */}
          </a>
        </blockquote>
      </div>
      <div className="p-4 flex-1">
        <p className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600">{caption}</p>
      </div>
    </div>
  );
};

export default InstagramEmbed;