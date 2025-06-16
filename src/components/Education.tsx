const education = [
    {
        degree: "Bachelor of Computer Science",
        university: "University Of Southern Mississippi",
        location: "Hattiesburg, Mississippi",
        duration: "August 2024 - Present",
        logo: "/usm-logo.png", 
    }
]

export default function Education() {
    return (
        <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-200 mb-6">
                Education
            </h1>
            
            <div className="space-y-6">
                {education.map((edu, index) => (
                    <div key={index} className="relative pl-8">
                        {/* Blue line on the left */}
                        <div className="absolute left-0 top-0 w-1 bg-blue-500 h-full"></div>
                        
                        {/* Header with logo, degree, university */}
                        <div className="flex items-start gap-4">
                            {/* University Logo */}
                            <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center flex-shrink-0 p-2">
                                <img
                                    src={edu.logo}
                                    alt={`${edu.university} logo`}
                                    className="w-full h-full object-contain rounded-full"
                                />
                            </div>
                            
                            {/* Degree and University Info */}
                            <div className="flex-1">
                                {/* Degree - ATTENTION GRABBING BOLD */}
                                <h3 className="font-attention text-white mb-1">
                                    {edu.degree}
                                </h3>
                                {/* University and Location - SECONDARY */}
                                <p className="font-secondary text-gray-300 mb-1">
                                    {edu.university}, {edu.location}
                                </p>
                                {/* Duration - MUTED */}
                                <p className="font-muted">
                                    {edu.duration}
                                </p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
}