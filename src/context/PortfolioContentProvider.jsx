import { useEffect, useMemo, useState } from 'react';
import { mergePortfolioSections } from '../content/editorDefaults';
import { isSupabaseConfigured, supabase } from '../lib/supabase';
import { PortfolioContentContext } from './PortfolioContent';

export default function PortfolioContentProvider({ children }) {
  const [remoteSections, setRemoteSections] = useState({});
  const [loading, setLoading] = useState(isSupabaseConfigured);
  const [remote, setRemote] = useState(false);

  useEffect(() => {
    if (!supabase) return undefined;
    let active = true;

    const loadPublishedContent = async () => {
      const { data, error } = await supabase
        .from('portfolio_published')
        .select('section_key, content, published_at');

      if (!active) return;
      if (!error && data) {
        setRemoteSections(Object.fromEntries(data.map((row) => [row.section_key, row.content])));
        setRemote(data.length > 0);
      }
      setLoading(false);
    };

    loadPublishedContent();
    return () => { active = false; };
  }, []);

  const value = useMemo(() => ({
    content: mergePortfolioSections(remoteSections),
    loading,
    remote,
  }), [loading, remote, remoteSections]);

  return <PortfolioContentContext.Provider value={value}>{children}</PortfolioContentContext.Provider>;
}
