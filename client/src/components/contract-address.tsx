import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

interface ContractAddressProps {
  variant: "hero" | "footer";
}

export default function ContractAddress({ variant }: ContractAddressProps) {
  const [copied, setCopied] = useState(false);
  const { toast } = useToast();
  
  const contractAddress = "6sHUDDi6vFbZCEapCxtE1KeVRNcVuL7UtLEguB4VqGCm";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(contractAddress);
      setCopied(true);
      toast({
        title: "Contract Address Copied!",
        description: "The contract address has been copied to your clipboard.",
      });
      
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      toast({
        title: "Copy Failed",
        description: "Failed to copy contract address. Please copy manually.",
        variant: "destructive",
      });
    }
  };

  if (variant === "footer") {
    return (
      <button 
        onClick={handleCopy}
        className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 ${
          copied 
            ? "bg-green-600 text-white" 
            : "bg-primary hover:bg-primary/90 text-primary-foreground modern-glow"
        }`}
        data-testid="button-copy-footer"
      >
        {copied ? "✓ Copied!" : "Copy Contract Address"}
      </button>
    );
  }

  return (
    <div className="modern-border rounded-2xl p-6 lg:p-8 mb-12 animate-fade-in" data-testid="contract-section">
      <h3 className="text-lg lg:text-xl font-semibold mb-6 text-center" data-testid="contract-title">Contract Address</h3>
      <div className="flex flex-col lg:flex-row items-center justify-center space-y-4 lg:space-y-0 lg:space-x-6">
        <div className="bg-input border border-border rounded-xl px-4 py-3 w-full lg:w-auto">
          <code className="text-foreground font-mono text-sm lg:text-base break-all" data-testid="contract-address">
            {contractAddress}
          </code>
        </div>
        <button 
          onClick={handleCopy}
          className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 hover:scale-105 whitespace-nowrap ${
            copied 
              ? "bg-green-600 text-white" 
              : "bg-primary hover:bg-primary/90 text-primary-foreground modern-glow"
          }`}
          data-testid="button-copy-hero"
        >
          {copied ? "✓ Copied!" : "Copy Address"}
        </button>
      </div>
    </div>
  );
}
