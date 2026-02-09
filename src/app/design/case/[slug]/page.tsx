// app/design/case/[id]/page.tsx

import { CaseStudy8 } from '@/components/case-study8';
import { designProjects } from '@/data/designProjects';
import type { CaseProjects } from '@/types/project.types';
import { notFound } from 'next/navigation';
import dynamic from 'next/dynamic';

const Page = async ({ params }: { params: Promise<{ slug: string }> }) => {
  const { slug } = await params;
  
  const project = designProjects.find(p => p.slug === slug);

  if (!project) {
    notFound();
  }

  // Dynamically import the project component based on the slug id
  const ProjectComponent = dynamic(() => 
    import(`@/components/projects/design/${slug}`).catch(() => {
      //When there is no such component return the fallback component
      return notFound();
    })
  );

  return (
    <div className='w-full flex items-center justify-center'>
      <CaseStudy8 project={project}  className={'max-w-[1200px] flex items-center justify-start'}>
        <ProjectComponent />
      </CaseStudy8>
    </div>
  );
}

export default Page;