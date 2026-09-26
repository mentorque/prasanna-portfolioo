import { motion } from 'framer-motion';

const skillCategories = [
  { title: 'B2B & Direct Sales', color: 'from-purple-500 to-purple-600', skills: ['B2B Prospecting', 'Target-Driven Sales', 'BANT Qualification', 'Consultative Selling', 'Deal Closing', 'Pipeline Management', 'Weekly Quota (€27k+)'] },
  { title: 'Account & Client Growth', color: 'from-purple-600 to-purple-700', skills: ['Partner Onboarding', 'Account Portfolio Growth', 'Upselling & Cross-Selling', 'In-Store Merchandising', 'Commercial Agreements', 'Client Relations'] },
  { title: 'CRM & Sales Operations', color: 'from-purple-500 to-violet-600', skills: ['Salesforce Service Cloud', 'Pipeline Forecasting', 'GDPR Compliance', 'Lead Qualification', 'Technical Product Translation', 'Incident Triage'] },
];

const Skills = () => {
  return (
    <section id="skills" className="py-24 relative">
      <div className="section-container">
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-100px' }} transition={{ duration: 0.6 }} className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-display font-bold mb-4"><span className="text-gradient">Sales & Core Expertise</span></h2>
          <p className="text-muted-foreground max-w-2xl mx-auto font-body">Proven capabilities across target-driven sales cycles, partner prospecting, account expansion, and Salesforce CRM management.</p>
        </motion.div>
        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          {skillCategories.map((category, index) => (
            <motion.div key={index} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: '-50px' }} transition={{ duration: 0.6, delay: index * 0.15 }}>
              <div className="glass-card rounded-2xl p-6 h-full relative overflow-hidden group">
                <div className={`absolute inset-x-0 top-0 h-1 bg-gradient-to-r ${category.color}`} />
                <h3 className="text-xl font-display font-semibold text-foreground mb-6 pt-2">{category.title}</h3>
                <div className="flex flex-wrap gap-2">
                  {category.skills.map((skill, idx) => (
                    <motion.span key={idx} initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: index * 0.1 + idx * 0.05 }} className="px-3 py-1.5 rounded-full bg-secondary text-foreground text-sm font-body hover:bg-primary/20 hover:text-primary transition-colors cursor-default">{skill}</motion.span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
