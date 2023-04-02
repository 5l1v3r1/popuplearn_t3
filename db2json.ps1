#Convert old .pul format (in DB/*.pul + recursive) to .json (in src/DB.pul/*.json)
Get-ChildItem -Path ".\DB" -Filter "*.pul" -Recurse | ForEach-Object {
    # Read contents of current .pul file
    $fileContent = Get-Content -Path $_.FullName -Raw
    
    # Parse metadata from file content
    $name = $_.BaseName
    $type = $fileContent | Select-String -Pattern '#!#TYPE="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $language1 = $fileContent | Select-String -Pattern '#!#LANGUAGE_1="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $voice1 = $fileContent | Select-String -Pattern '#!#VOICE_1=(.+)' | ForEach-Object { $_.Matches.Groups[1].Value }
    $language2 = $fileContent | Select-String -Pattern '#!#LANGUAGE_2="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $voice2 = $fileContent | Select-String -Pattern '#!#VOICE_2=(.+)' | ForEach-Object { $_.Matches.Groups[1].Value }
    $subject = $fileContent | Select-String -Pattern '#!#SUBJECT="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $number = $fileContent | Select-String -Pattern '#!#NUMBER="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $dbIntroduction = $fileContent | Select-String -Pattern '#!#DB_INTRODUCTION="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }
    $dbSentence = $fileContent | Select-String -Pattern '#!#DB_SENTENCE="(.+)"' | ForEach-Object { $_.Matches.Groups[1].Value }

    # Parse question-answer pairs and details from file content
    $qaPairs = @()
    $fileContent -split "`n" | ForEach-Object {
        if ($_ -notmatch '^#') {
            # The string does not start with the # symbol
            if ($_ -match '^(.+)\s+\|=\|\s+(.+)\s+\|\|\|\s+(.+)$') {
                $question = $Matches[1]
                $answer = $Matches[2]
                $details = @(
                    @{
                        "description" = $Matches[3]
                    }
                )
                $qaPairs += @{
                    "question" = $question
                    "answer"   = $answer
                    "details"  = $details
                }
            }
            # elseif ($_ -match '^\|\|\|(.+)\|\|\|$') {
            elseif ($_ -match '^(.+)\s+\|=\|\s+(.+)$') {
                #if no ||| details
                $question = $Matches[1]
                $answer = $Matches[2]
                $qaPairs += @{
                    "question" = $question
                    "answer"   = $answer
                    # "details"  = ""
                }
            }
        }
    }

    # Create output object and convert to JSON
    $output = @{
        "name"         = $name
        "type"         = $type
        "language_1"   = $language1
        "voice_1"      = $voice1
        "language_2"   = $language2
        "voice_2"      = $voice2
        "subject"      = $subject
        "number"       = $number
        "introduction" = $dbIntroduction
        "sentence"     = $dbSentence
        "pul_elements" = $qaPairs
    }
    $jsonOutput = ConvertTo-Json $output -Depth 10

    # Save JSON to file
    Set-Content -Path "src\DB_pul\$name.json" -Value $jsonOutput -Force
    
    #Display the details
    $subject + " : " + $name + " (" + $type + ") " + $language1 + "/" + $language2 + " DONE"
}