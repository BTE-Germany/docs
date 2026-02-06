import { source } from '@/lib/source';
import { DocsLayout } from 'fumadocs-ui/layouts/docs';
import { baseOptions } from '@/lib/layout.shared';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <DocsLayout tree={source.getPageTree()} {...baseOptions()} githubUrl='https://github.com/BTE-Germany/docs'
      sidebar={{
        "footer": <div className='text-xs text-center mt-2 text-fd-muted-foreground'>
          <a href="https://bte-germany.de/legal">Impressum</a>
          <span className='mx-2'>|</span>
          <a href="https://bte-germany.de/privacy">Datenschutz</a>
        </div>
      }}
    >
      {children}
    </DocsLayout>
  );
}
