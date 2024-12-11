"use client"
import React, { useState, useEffect } from 'react';
function InstagramPost({ url }) {
  const [postUrl, setPostUrl] = useState(url);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      try {
        // You might need to implement a more robust solution to extract the embed code from the URL
        const response = await fetch(url);
        const html = await response.text();

        // Extract the embed code from the HTML response
        const iframeRegex = /<iframe.*?src="([^"]+)".*?<\/iframe>/;
        const match = html.match(iframeRegex);

        if (match) {
          setPostUrl(match[1]);
          setIsLoading(false);
        } else {
          setError('Failed to extract embed code');
        }
      } catch (error) {
        setError('Error fetching Instagram post');
      }
    };

    fetchPost();
  }, [url]);

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="aspect-w-16 aspect-h-9">
      {isLoading ? (
        <div className="flex justify-center items-center h-full">Loading...</div>
      ) : (
        <iframe src={postUrl} title="Instagram Post" allowFullScreen />
      )}
    </div>
  );
}

export default InstagramPost;