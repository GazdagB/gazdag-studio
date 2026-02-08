// app/design/case/[id]/page.tsx

import { CaseStudy8 } from '@/components/case-study8';
import { designProjects } from '@/data/designProjects';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const Page = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  
  const project = designProjects.find(p => p.slug === id);

  if (!project) {
    notFound();
  }

  // Dynamic import - slug alapján betölti a komponenst
  const ProjectComponent = dynamic(() => 
    import(`@/components/projects/design/${id}`).catch(() => {
      // Ha nincs ilyen fájl, 404
      return notFound();
    })
  );

  return (
    <div className='w-full flex items-center justify-center'>
      <CaseStudy8 className={'max-w-[1200px] flex items-center justify-center'}>
        <ProjectComponent />
      </CaseStudy8>
    </div>
  );
}

export default Page;