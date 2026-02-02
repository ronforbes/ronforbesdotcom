"use client";

import { useEffect, useRef } from "react";

interface TweetProps {
  id: string;
}

declare global {
  interface Window {
    twttr?: {
      widgets: {
        load: (element?: HTMLElement) => void;
      };
    };
  }
}

export function Tweet({ id }: TweetProps) {
  const tweetRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Load Twitter widget script if not already loaded
    if (!window.twttr) {
      const script = document.createElement("script");
      script.src = "https://platform.twitter.com/widgets.js";
      script.async = true;
      document.body.appendChild(script);
    } else {
      // If script is already loaded, just reload widgets
      window.twttr.widgets.load(tweetRef.current ?? undefined);
    }
  }, [id]);

  return (
    <div ref={tweetRef} className="my-6 flex justify-center">
      <blockquote className="twitter-tweet" data-dnt="true">
        <a href={`https://twitter.com/x/status/${id}`}>Loading tweet...</a>
      </blockquote>
    </div>
  );
}
