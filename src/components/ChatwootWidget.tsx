
import React, { useEffect } from 'react';

// Add Chatwoot to window type with more complete type definitions
declare global {
  interface Window {
    chatwootSDK?: {
      run: (config: { websiteToken: string; baseUrl: string }) => void;
      toggle?: () => void;
      toggleBubble?: () => void;
    } & Record<string, any>;
  }
}

interface ChatwootWidgetProps {
  websiteToken?: string;
  baseUrl?: string;
}

const ChatwootWidget: React.FC<ChatwootWidgetProps> = ({
  websiteToken = 'CQkvHrHBResx7AEXoymf858b',
  baseUrl = 'https://app.chatwoot.com',
}) => {
  useEffect(() => {
    // Remove any existing Chatwoot script
    const existingScript = document.getElementById('chatwoot-script');
    if (existingScript) {
      existingScript.remove();
    }

    // Initialize Chatwoot
    const script = document.createElement('script');
    script.id = 'chatwoot-script';
    script.src = `${baseUrl}/packs/js/sdk.js`;
    script.defer = true;
    script.async = true;
    
    script.onload = () => {
      if (window.chatwootSDK) {
        window.chatwootSDK.run({
          websiteToken,
          baseUrl,
        });
      }
    };

    document.body.appendChild(script);

    // Cleanup on component unmount
    return () => {
      const chatwootScript = document.getElementById('chatwoot-script');
      if (chatwootScript) {
        chatwootScript.remove();
      }
      
      // Remove Chatwoot widget container
      const chatwootContainer = document.querySelector('.woot--bubble-holder');
      if (chatwootContainer) {
        chatwootContainer.remove();
      }
    };
  }, [websiteToken, baseUrl]);

  return null; // This component doesn't render anything itself
};

export default ChatwootWidget;
