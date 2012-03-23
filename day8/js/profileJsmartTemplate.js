
var profilejSmart = "<div>\
                {foreach $profiles as $i => $prof}\
                    <p>Name: {$prof.name}</p>\
                    <p>Degree: {$prof.degree}</p>\
                    <p>Nationality: {$prof.nationality}</p>\
                    <p>Area: {$prof.area}</p>\
                    <p>Education: {$prof.education}</p>\
                    <p>Actual job: {$prof.actual_job}</p>\
                    <p>Previous jobs: {$prof.prev_jobs}</p>\
                {/foreach}\
                </div>";

