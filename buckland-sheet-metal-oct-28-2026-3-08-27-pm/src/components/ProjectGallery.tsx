import React, { useEffect, useState } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Maximize2, X } from 'lucide-react';
import { AnimatePresence, motion, useReducedMotion, type Variants } from 'motion/react';
import {
  ProjectFilterCategory,
  RESIDENTIAL_PROJECTS,
  ResidentialProject,
} from '../data/catalog';
import { ResilientImage } from './ResilientImage';

interface ProjectGalleryProps {
  onOpenQuoteModal: (presetScope?: string, projectReference?: string) => void;
}

const FILTER_TABS: { id: ProjectFilterCategory; label: string }[] = [
  { id: 'all', label: 'All Work' },
  { id: 'roofing', label: 'Standing-Seam' },
  { id: 'gutters', label: 'Seamless Gutters' },
  { id: 'copper', label: 'Custom Copper' },
];

const ARCHITECTURAL_EASE: [number, number, number, number] = [0.16, 1, 0.3, 1];

export const ProjectGallery: React.FC<ProjectGalleryProps> = ({ onOpenQuoteModal }) => {
  const [activeFilter, setActiveFilter] = useState<ProjectFilterCategory>('all');
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const prefersReducedMotion = useReducedMotion();

  const filteredProjects =
    activeFilter === 'all'
      ? RESIDENTIAL_PROJECTS
      : RESIDENTIAL_PROJECTS.filter((project) => project.category === activeFilter);

  const activeLightboxProject: ResidentialProject | null =
    selectedIndex !== null && filteredProjects[selectedIndex]
      ? filteredProjects[selectedIndex]
      : null;

  useEffect(() => {
    if (selectedIndex === null) return;

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === 'Escape') {
        setSelectedIndex(null);
      } else if (event.key === 'ArrowRight') {
        setSelectedIndex((prev) =>
          prev === null ? null : (prev + 1) % filteredProjects.length
        );
      } else if (event.key === 'ArrowLeft') {
        setSelectedIndex((prev) =>
          prev === null
            ? null
            : (prev - 1 + filteredProjects.length) % filteredProjects.length
        );
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedIndex, filteredProjects.length]);

  const handleFilterChange = (category: ProjectFilterCategory) => {
    setActiveFilter(category);
    setSelectedIndex(null);
  };

  const getCardVariants = (index: number): Variants => {
    if (prefersReducedMotion) {
      return {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      };
    }

    return {
      hidden: {
        opacity: 0,
        y: 28,
      },
      visible: {
        opacity: 1,
        y: 0,
        transition: {
          duration: 0.58,
          delay: (index % 3) * 0.08,
          ease: ARCHITECTURAL_EASE,
          when: 'beforeChildren',
          staggerChildren: 0.065,
        },
      },
    };
  };

  const mediaRevealVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0.85, scale: 1.04 },
        visible: {
          opacity: 1,
          scale: 1,
          transition: {
            duration: 0.65,
            ease: ARCHITECTURAL_EASE,
          },
        },
      };

  const detailLayerVariants: Variants = prefersReducedMotion
    ? {
        hidden: { opacity: 1 },
        visible: { opacity: 1 },
      }
    : {
        hidden: { opacity: 0, y: 12 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.44,
            ease: ARCHITECTURAL_EASE,
          },
        },
      };

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-28 bg-white">
      <div className="max-w-[1320px] mx-auto px-4 sm:px-6 lg:px-10">
        {/* Centered Two-Tone Editorial Header + Segmented Filter Bar */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.35 }}
          transition={{ duration: 0.5, ease: ARCHITECTURAL_EASE }}
          className="text-center max-w-2xl mx-auto mb-10 sm:mb-14 space-y-4"
        >
          <p className="text-xs font-semibold tracking-wider text-neutral-500">
            Featured Work
          </p>

          <h2 className="font-display font-medium tracking-tight text-[#0A0A0A] text-[clamp(2rem,3.6vw,3.1rem)] leading-[1.12]">
            Selected
            <span className="block text-[#EC5B0E]">Residential Installations</span>
          </h2>

          <p className="text-sm sm:text-base text-neutral-600 max-w-[54ch] mx-auto">
            Inspect completed standing-seam roofs, continuous heavy-gauge gutters, and hand-soldered copper joinery.
          </p>

          {/* Interactive Filter Controls */}
          <div className="pt-2 flex justify-center">
            <div
              role="group"
              aria-label="Filter residential projects by discipline"
              className="inline-flex flex-wrap justify-center items-center gap-1 p-1.5 bg-[#F4F5F7] rounded-full border border-neutral-200"
            >
              {FILTER_TABS.map((tab) => {
                const isSelected = activeFilter === tab.id;
                return (
                  <button
                    key={tab.id}
                    type="button"
                    onClick={() => handleFilterChange(tab.id)}
                    className={`relative px-4 py-2 min-h-[38px] text-xs sm:text-sm font-semibold rounded-full transition-colors duration-150 whitespace-nowrap shrink-0 cursor-pointer ${
                      isSelected
                        ? 'text-white'
                        : 'text-neutral-600 hover:text-[#0A0A0A]'
                    }`}
                  >
                    {isSelected && (
                      <motion.span
                        layoutId={prefersReducedMotion ? undefined : 'active-gallery-filter'}
                        transition={{ duration: 0.22, ease: ARCHITECTURAL_EASE }}
                        className="absolute inset-0 rounded-full bg-[#0A0A0A]"
                        aria-hidden="true"
                      />
                    )}
                    <span className="relative z-10">{tab.label}</span>
                  </button>
                );
              })}
            </div>
          </div>
        </motion.div>

        {/* Tall Left + Stacked Right Asymmetric Bento Showcase */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-7">
          {filteredProjects.map((project, index) => {
            const isTallPrimary = activeFilter === 'all' && index === 0;
            const isRightStack = activeFilter === 'all' && (index === 1 || index === 2);
            const isFullSpanBottom = activeFilter === 'all' && index === 3;

            const gridPlacementClass = isTallPrimary
              ? 'lg:col-span-6 lg:row-span-2'
              : isRightStack
                ? 'lg:col-span-6 lg:row-span-1'
                : isFullSpanBottom
                  ? 'lg:col-span-12'
                  : 'lg:col-span-6';

            const mediaAspectClass = isTallPrimary
              ? 'aspect-[4/3] lg:aspect-auto lg:h-[380px]'
              : isFullSpanBottom
                ? 'aspect-[16/9] lg:aspect-[21/8]'
                : 'aspect-[16/10]';

            return (
              <motion.article
                key={`${activeFilter}-${project.id}`}
                variants={getCardVariants(index)}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.16, margin: '0px 0px -40px 0px' }}
                className={`${gridPlacementClass} group bg-[#F8F9FA] border border-neutral-200 hover:border-neutral-300 rounded-2xl overflow-hidden flex flex-col justify-between transition-colors duration-200`}
              >
                <div>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    aria-label={`Open full-screen detail view for ${project.title}`}
                    className={`relative block w-full ${mediaAspectClass} overflow-hidden bg-[#141414] text-left cursor-pointer`}
                  >
                    <motion.div variants={mediaRevealVariants} className="w-full h-full">
                      <ResilientImage
                        src={project.image}
                        alt={project.imageAlt}
                        fallbackLabel={project.title}
                        className="w-full h-full object-cover transition-transform duration-300 ease-out group-hover:scale-[1.03]"
                      />
                    </motion.div>
                    <span className="absolute bottom-3.5 right-3.5 inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-black/80 text-white text-xs font-medium backdrop-blur-xs transition-transform duration-200 group-hover:-translate-y-0.5">
                      <Maximize2 className="w-3.5 h-3.5" aria-hidden="true" />
                      <span>Inspect Joinery</span>
                    </span>
                  </button>

                  <div className="p-5 sm:p-6">
                    {/* Layer 1: Unboxed metadata with middle-dot separators */}
                    <motion.div
                      variants={detailLayerVariants}
                      className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-neutral-500 mb-2"
                    >
                      <span className="font-semibold text-[#C94705]">{project.categoryLabel}</span>
                      <span aria-hidden="true">·</span>
                      <span className="font-mono">{project.townPlaceholder}</span>
                    </motion.div>

                    {/* Layer 2: Project Title */}
                    <motion.h3
                      variants={detailLayerVariants}
                      className="font-display text-lg sm:text-xl font-bold text-[#0A0A0A] mb-2"
                    >
                      <button
                        type="button"
                        onClick={() => setSelectedIndex(index)}
                        className="text-left hover:text-[#C94705] transition-colors duration-150 cursor-pointer"
                      >
                        {project.title}
                      </button>
                    </motion.h3>

                    {/* Layer 3: Scope & Profile Specification Reveal */}
                    <motion.div variants={detailLayerVariants} className="space-y-2">
                      <p className="text-sm text-neutral-600 leading-[1.6]">
                        {project.scopeSummary}
                      </p>
                      <p className="font-mono text-xs text-neutral-500 tabular-nums">
                        Profile: <span className="text-[#0A0A0A]">{project.profileSpec}</span>
                      </p>
                    </motion.div>
                  </div>
                </div>

                {/* Layer 4: Gauge & Build Notes Spec Bar */}
                <motion.div
                  variants={detailLayerVariants}
                  className="px-5 pb-5 sm:px-6 sm:pb-6 pt-3.5 border-t border-neutral-200/80 flex flex-wrap items-center justify-between gap-3 text-xs"
                >
                  <span className="font-mono text-[#0A0A0A] tabular-nums">{project.materialGauge}</span>
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(index)}
                    className="inline-flex items-center gap-1 font-semibold text-[#0A0A0A] hover:text-[#C94705] whitespace-nowrap shrink-0 cursor-pointer"
                  >
                    <span>Build Notes</span>
                    <ArrowUpRight className="w-3.5 h-3.5" aria-hidden="true" />
                  </button>
                </motion.div>
              </motion.article>
            );
          })}
        </div>

        <p className="mt-7 text-center text-xs text-neutral-500 font-mono">
          Jobsite Camera Roll Note: Tag additional installations by town once{' '}
          <span className="text-[#0A0A0A]">[PLACEHOLDER: Homeowner Address Permissions]</span> are confirmed.
        </p>
      </div>

      {/* Fullscreen Accessible Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxProject && selectedIndex !== null && (
          <motion.div
            key="project-lightbox-backdrop"
            role="dialog"
            aria-modal="true"
            aria-labelledby="lightbox-project-title"
            initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2, ease: ARCHITECTURAL_EASE }}
            className="fixed inset-0 z-50 bg-black/85 backdrop-blur-xs flex items-center justify-center p-3 sm:p-6 overflow-y-auto"
            onClick={() => setSelectedIndex(null)}
          >
            <motion.div
              key={activeLightboxProject.id}
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 14, scale: 0.985 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={prefersReducedMotion ? { opacity: 0 } : { opacity: 0, y: 10, scale: 0.99 }}
              transition={{ duration: 0.24, ease: ARCHITECTURAL_EASE }}
              className="bg-white border border-neutral-200 rounded-2xl max-w-5xl w-full overflow-hidden shadow-2xl my-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="flex items-center justify-between gap-4 px-4 sm:px-6 py-3.5 border-b border-neutral-200 bg-[#F4F5F7]">
                <div className="text-xs font-mono text-neutral-600 tabular-nums">
                  Project {selectedIndex + 1} of {filteredProjects.length} · {activeLightboxProject.categoryLabel}
                </div>
                <div className="flex items-center gap-2">
                  {filteredProjects.length > 1 && (
                    <>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedIndex(
                            (selectedIndex - 1 + filteredProjects.length) % filteredProjects.length
                          )
                        }
                        aria-label="Previous project"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white text-[#0A0A0A] hover:bg-neutral-100 cursor-pointer"
                      >
                        <ArrowLeft className="w-4 h-4" />
                      </button>
                      <button
                        type="button"
                        onClick={() =>
                          setSelectedIndex((selectedIndex + 1) % filteredProjects.length)
                        }
                        aria-label="Next project"
                        className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-neutral-300 bg-white text-[#0A0A0A] hover:bg-neutral-100 cursor-pointer"
                      >
                        <ArrowRight className="w-4 h-4" />
                      </button>
                    </>
                  )}
                  <button
                    type="button"
                    onClick={() => setSelectedIndex(null)}
                    aria-label="Close project detail viewer"
                    className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-[#0A0A0A] text-white hover:bg-[#EC5B0E] cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 lg:grid-cols-12">
                <div className="lg:col-span-7 bg-[#0A0A0A] flex items-center">
                  <ResilientImage
                    src={activeLightboxProject.image}
                    alt={activeLightboxProject.imageAlt}
                    eager={true}
                    fallbackLabel={activeLightboxProject.title}
                    className="w-full h-full max-h-[520px] object-cover"
                  />
                </div>

                <div className="lg:col-span-5 p-5 sm:p-7 flex flex-col justify-between gap-6">
                  <div className="space-y-4">
                    <div className="text-xs font-mono text-[#C94705]">
                      {activeLightboxProject.townPlaceholder}
                    </div>
                    <h3
                      id="lightbox-project-title"
                      className="font-display text-xl sm:text-2xl font-bold text-[#0A0A0A]"
                    >
                      {activeLightboxProject.title}
                    </h3>

                    <dl className="space-y-2.5 pt-2 border-t border-neutral-100 text-xs sm:text-sm">
                      <div>
                        <dt className="text-neutral-500">Profile Geometry</dt>
                        <dd className="font-mono text-[#0A0A0A] mt-0.5">
                          {activeLightboxProject.profileSpec}
                        </dd>
                      </div>
                      <div>
                        <dt className="text-neutral-500">Material &amp; Gauge</dt>
                        <dd className="font-mono text-[#0A0A0A] mt-0.5">
                          {activeLightboxProject.materialGauge}
                        </dd>
                      </div>
                    </dl>

                    <p className="text-sm text-neutral-600 leading-[1.6]">
                      {activeLightboxProject.scopeSummary}
                    </p>

                    <div className="bg-[#F4F5F7] border border-neutral-200 rounded-xl p-3.5 text-xs sm:text-sm text-[#0A0A0A]">
                      <span className="font-semibold">Joinery Note: </span>
                      {activeLightboxProject.craftDetail}
                    </div>
                  </div>

                  <button
                    type="button"
                    onClick={() => {
                      const scopeMap: Record<string, string> = {
                        roofing: 'Standing-Seam Metal Roofing',
                        gutters: 'Seamless Gutters & Downspouts',
                        copper: 'Custom Copper & Flashing',
                      };
                      const targetScope =
                        scopeMap[activeLightboxProject.category] ?? 'Seamless Gutters & Downspouts';
                      const titleRef = activeLightboxProject.title;
                      setSelectedIndex(null);
                      onOpenQuoteModal(targetScope, titleRef);
                    }}
                    className="w-full inline-flex items-center justify-center gap-2 px-5 py-3.5 min-h-[46px] text-sm font-semibold text-white bg-[#EC5B0E] hover:bg-[#D14B06] rounded-full transition-colors duration-150 whitespace-nowrap cursor-pointer"
                  >
                    <span>Request Quote for Similar Work</span>
                    <ArrowRight className="w-4 h-4 shrink-0" aria-hidden="true" />
                  </button>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
